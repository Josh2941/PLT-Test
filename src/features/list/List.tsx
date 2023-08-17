import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, FlatList, View } from "react-native";
import { ListItem, ListItemProps } from "../../components/ListItem";
import { connect } from "react-redux";
import * as baseActions from '../../redux/BaseActions';

type ListProps = {
    selectedList: ListItemProps[]
    actions: {
        init: () => void
        increment: (item: ListItemProps) => void,
        decrement: (item: ListItemProps) => void
    }
}

const List = ({ actions: { init, increment, decrement }, selectedList, navigation }: ListProps) => {

    const [ list, setList ] = useState<ListItemProps[]>([]);

    useEffect(() => {
        init();
        (async () => {
            const response = await axios.get('https://my-json-server.typicode.com/benirvingplt/products/products');
            setList(response.data);
        })()
        
    }, [])

    useEffect(() => {
        if (list !== selectedList) {
            const newList: ListItemProps[] = list.map(item => {
                let filteredItem = {} as ListItemProps;
                for (let i = 0; i < selectedList.length; i++) {
                    const selectedItem = selectedList[i];
                    if (item.id === selectedItem.id) {
                        filteredItem = selectedItem;
                        break;
                    } else {
                        filteredItem = { ...item, selectedCount: 0 };
                    }
                }
                if (selectedList.length === 0) {
                    return { ...item, selectedCount: 0 };
                }
                return filteredItem;
            });
            setList(newList);
        }
    }, [selectedList])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={list}
                extraData={list}
                renderItem={({ item }) => <ListItem {...item} onPressIncrement={increment} onPressDecrement={decrement} />}/>
            <Button title='Cart' onPress={() => navigation.navigate('Cart')} />
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {
        selectedList: state.base.items
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            init: () => dispatch(baseActions.init()),
            increment: (item: ListItemProps) => dispatch(baseActions.increment(item)),
            decrement: (item: ListItemProps) => dispatch(baseActions.decrement(item))
        }
    }
}

const ListConnected = connect(mapStateToProps, mapDispatchToProps)(List);
const ListContainer = (props: any) => <ListConnected {...props} />;

export default ListContainer