import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import JARMODULE from './Test';

const Test2 = () => {

    const [jar, setjar] = useState([]);
    const [revenue, setrevenue] = useState([
        {
            id: 1,
            amount: 0
        }
    ]);

    const [input, setinput] = useState();
    const [input2, setinput2] = useState(0);

    useEffect(() => {
        createTable();
        createRows();
        fetchJars();
        // fetchRevenue();

        createTable2();
        createRows2();
        fetchRevenue();
    }, []);

    const createTable = async () => {
        await JARMODULE.createTable();
    };

    const createRows = async () => {
        await JARMODULE.createRows();
    };

    const createTable2 = async () => {
        await JARMODULE.createTable2();
    };

    const createRows2 = async () => {
        await JARMODULE.createRows2();
    };

    const fetchJars = async () => {
        const jarList = await JARMODULE.getJars();
        setjar(jarList);
    };

    const fetchRevenue = async () => {
        const jarList = await JARMODULE.getRevenue();
        setrevenue(jarList);
        setinput(revenue[0].amount);
    };

    const updateRevenue = async () => {
        const jarList = await JARMODULE.updateRevenue();
        fetchRevenue();
    }

    const addAll = async () => {
        await JARMODULE.addAll(revenue[0].amount);
        fetchJars();
    }

    const click = async () => {
        await JARMODULE.updateRevenue(input);
        const jarList = await JARMODULE.getRevenue();
        setrevenue(jarList);
        await JARMODULE.addAll(input);
        const jarList2 = await JARMODULE.getJars();
        setjar(jarList2);
    }

    const decreaseJarwithID = async (id) =>{
        await JARMODULE.updateJarwithId(input2, id);
        const jarList2 = await JARMODULE.getJars();
        setjar(jarList2);
    }

    const log = () => {
        console.log(jar);
    }

    return (
        <View style={{ backgroundColor: "white" }}>
            <Button title="Add User" onPress={log} />
            {/* <Button title="Add User" onPress={addAllJars}/> */}

            <TextInput
                style={{ height: 50, width: 100, backgroundColor: "red" }}
                keyboardType="numeric"
                onChangeText={value => setinput(value)}
                defaultValue={revenue[0].amount + ""}
            />
            <Button title="Fetch Users" onPress={click} />

            <TextInput
                style={{ height: 50, width: 100, backgroundColor: "red" }}
                keyboardType="numeric"
                onChangeText={value => setinput2(value)}
                defaultValue={input2 + ""}
            />
            
            {/* <Button title="Fetch Users" onPress={addAll}/>
          <Button title="Fetch Users" onPress={fetchJars}/> */}
            {/* <Button title="Fetch Users" onPress={reset} /> */}

            {jar.map((jar) => (
                <View key={jar.id}>
                    <Text>User ID: {jar.id}</Text>
                    <Text>Name: {jar.name}</Text>
                    <Text>Name: {jar.amount}</Text>
                    <Text>Name: {((jar.amount)/(jar.amountOld))*100} %</Text>
                    <Text>Age: {jar.percent}</Text>
                    <Button title="Giam" onPress={() => decreaseJarwithID(jar.id)}/>
                </View>
            ))}
        </View>
    );
}

export default Test2

const styles = StyleSheet.create({})