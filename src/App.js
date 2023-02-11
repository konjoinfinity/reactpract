import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);
	const styles = {
childOne{
	width: '75%';
	height: '65vh';
	backgroundcolor: #f4f4f4;
	box-shadow: 5px 5px 25px -5px rgba(0,0,0,0.5);
	border-radius: 15px;
	margin: auto;
}

input{
	padding: 25px;
	text-align: left;
	height: 30px;
	border: none;
	background: transparent;
	font-size:	20px;
	font-weight: 500;
	width: 65%;
	border-bottom: 2px solid #8566aa;
	outline: none;
	margin-right: 20px;
}

.AddBtn{
	width: 50px;
	height: 50px;
	background-color: #7E57C2!important;
	color: white !important;
	box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.3);
	border-radius: 50% !important;
}

.textFont{
	font-family: verdana;
	font-size: 20px;
	font-weight: 500;
}

.childTwo{
	width: 35%;
	height: 7vh;
	background-color: #f4f4f4;
	box-shadow: 5px 5px 25px -5px rgba(0,0,0,0.5);
	border-radius: 15px;
	margin: auto;
}

.delBtn{
	width: 100%;
	height: 7vh;
	background-color: #f4f4f4;
	box-shadow: 5px 5px 25px -5px rgba(0,0,0,0.5);
	border-radius: 15px;
	margin: auto;
}
  }

	const firstEvent = (event) => {
		setItem(event.target.value);
	}
	
	const secondEvent = () => {
		setNewItem((prev)=>{
			return [...prev, item]
		});
		setItem("");
	}
	
	const thirdEvent = () => {
		setNewItem([]);
	}
	
	return(
		<div>
			<br />
			<br />
			<div className="childOne">
				<input type="text" value={item} placeholder="Add a task" onChange={firstEvent} />
				<Button className="AddBtn" onClick={secondEvent}>
					<AddIcon />
				</Button>
				<br />
				<br />
				<ul className="textFont">
					{
						newItem.map((val) => {
							return <li> {val} </li>;
						})
					}
				</ul>
			</div>
			<br />
			<br />
			<div className="childTwo">
				<Button className="delBtn" onClick={thirdEvent}>
					<DeleteIcon />Delete All
				</Button>
			</div>
		</div>
	);
}


export default App;
