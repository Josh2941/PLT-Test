import React from 'react'
import { Button, Image, StyleSheet, Text, View } from "react-native"

export type ListItemProps = {
    id: number
    colour: string
    name: string
    price: number
    img: string
    selectedCount?: number
}

type ItemProps = ListItemProps & {
    onPressIncrement?: (item: ListItemProps) => void
    onPressDecrement?: (item: ListItemProps) => void
}

export const ListItem = (props: ItemProps) => {
    const { id, name, colour, price, img, selectedCount, onPressIncrement, onPressDecrement } = props;
    return (
        <View style={styles.container} key={id}>
            <Image style={styles.image} source={{ uri: img }} /> 
            <View style={{ flex: 1 }}>
                <Text testID='listItemName' style={styles.name}>{name}</Text>
                <View style={styles.bottomRow}>
                    <View>
                        <Text testID='listItemColor' style={{ marginBottom: 10 }}>{colour}</Text>
                        <Text testID='listItemPrice' style={{ marginBottom: 10 }}>{price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {selectedCount && selectedCount > 0 ?
                        <>
                            <Button testID='listItemDecermentButton' title="-" onPress={() => onPressDecrement?.(props as ListItemProps)}/>
                            <Text testID='listItemCount'>{selectedCount}</Text>
                            <Button testID='listItemIncermentButton' title="+" onPress={() => onPressIncrement?.(props as ListItemProps)}/>
                        </>
                        : 
                        <Button testID='listItemAddToCartButton' title="Add To Cart" onPress={() => onPressIncrement?.(props as ListItemProps)}/>}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    image: {
        width: 100,
        height: 100
    },
    name: {
        width: '80%',
        marginBottom: 10
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})