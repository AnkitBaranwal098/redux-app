import React from "react";
import { useDispatch } from "react-redux";
import {addItem, removeItem} from "./cartSlice"

const CardContainer = () => {

  const dispatch = useDispatch()

  const handleClick = (food)=>{
      dispatch(addItem(food))
  }

  const handleMinusClick = ()=>{
    dispatch(removeItem());
  }

  return (
    <>
      <div className="card">
        <h2>Spaghetti Carbonara</h2>
        <p>
          A classic Italian pasta dish with eggs, cheese, pancetta, and black
          pepper.
        </p>
        <button className="add-button" onClick={()=>handleClick("food")}>Add</button>
        <button className="add-button" onClick={()=>handleMinusClick("food")}>Minus</button>
      </div>

      <div className="card">
        <h2>Margherita Pizza</h2>
        <p>A simple yet delicious pizza with tomato, mozzarella, and basil.</p>
        <button className="add-button" onClick={()=>handleClick("food")}>Add</button>
      </div>

      <div className="card">
        <h2>Chicken Tandoori</h2>
        <p>Marinated chicken cooked in a tandoor, served with mint chutney.</p>
        <button className="add-button" onClick={()=>handleClick("food")}>Add</button>
      </div>

      <div className="card">
        <h2>Sushi Roll</h2>
        <p>Assorted sushi rolls with fresh seafood and vinegared rice.</p>
        <button className="add-button" onClick={()=>handleClick("food")}>Add</button>
      </div>

      <div className="card">
        <h2>Caesar Salad</h2>
        <p>
          A classic salad with romaine lettuce, croutons, parmesan cheese, and
          Caesar dressing.
        </p>
        <button className="add-button" onClick={()=>handleClick("food")}>Add</button>
      </div>
    </>
  );
};

export default CardContainer;
