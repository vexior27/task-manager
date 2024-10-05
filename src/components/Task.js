import React from 'react';
import Card from 'react-bootstrap/Card'
import Employee from './Employee';

import { FaBars } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

import Tag from './Tag';

function Task(props) {

    const tagsArr = props.tagsArr ? Object.entries(props.tagsArr) : [];
    const empArr = props.emp ? Object.entries(props.emp) : [];

    console.log(empArr);

    return (
        <div>
            <Card className='task'>
                <Card.Body>
                    <div className="tag-container">
                        {tagsArr.map(([key, item], index) => (
                            <Tag key={index} tagName={item.name} color={item.color} />
                        ))}
                    </div>
                    <Card.Title className='p-2 title'>{props.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <div className='opt-container'>
                         <IoTimeOutline/>
                        <FaBars />
                    </div>
                    <div className='img-container'>
                        {
                             empArr.map(([key, item]) => ( // Używamy Object.entries do uzyskania par klucz-wartość
                                <Employee key={key} img={item.img} />
                            ))
                        }
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Task;