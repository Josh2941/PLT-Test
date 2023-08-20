import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native";
import { ListItem, ListItemProps } from "../../components/ListItem";
import { connect } from "react-redux";
import * as baseActions from '../../redux/BaseActions';

type ListProps = {
    selectedList: ListItemProps[]
    actions: {
        increment: (item: ListItemProps) => void,
        decrement: (item: ListItemProps) => void
    }
}

export const Cart = ({ actions: { increment, decrement }, selectedList }: ListProps) => {

    const [ cartList, setCartList ] = useState<ListItemProps[]>(selectedList);

    useEffect(() => {
        if (cartList !== selectedList) 
            setCartList(selectedList);
    }, [selectedList])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                testID="cartList"
                style={{ flex: 1 }}
                data={cartList}
                extraData={cartList}
                renderItem={({ item }) => <ListItem {...item} onPressIncrement={increment} onPressDecrement={decrement} />}/>
            <Text>Total: <Text testID="total">{selectedList.reduce((acc, {price, selectedCount}) => acc + (price * selectedCount!), 0)}</Text></Text>
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
            increment: (item: ListItemProps) => dispatch(baseActions.increment(item)),
            decrement: (item: ListItemProps) => dispatch(baseActions.decrement(item))
        }
    }
}

const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);
const CartContainer = (props: any) => <CartConnected {...props} />;

export default CartContainer