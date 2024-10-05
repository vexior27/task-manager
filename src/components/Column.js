import Card from 'react-bootstrap/Card';
import Task from "./Task"
import React, { useState, useEffect } from 'react';

import "./style.css"

import { FaPlus } from "react-icons/fa6";


function Column(props) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const responde = await fetch("./data.json");
                if(!responde.ok) {
                    throw new Error("Błąd pobierania danych!");
                }
                const jsonData = await responde.json();
                setData(jsonData);
            }
            catch (err)
            {
                console.error("Fetch error: ", err);
            }
        };
        fetchData();
    }, [])

    const filteredTasks = data.filter(task => task.task_type === props.type);

    return (
        <Card className="col-4-md column">
            <Card.Header>
                {
                    props.type
                }
            </Card.Header>
            <Card.Body>
                {
                    filteredTasks.map((item, index) => (
                        <Task key={index} name={item.task_name} tagsArr={item.task_tag} emp={item.employes} />
                    ))
                }   
            </Card.Body>
            <Card.Footer className="column-footer">
                Add new task <FaPlus/>
            </Card.Footer>
        </Card>
    );
}

export default Column;
