import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["test"]);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory = { onAddCategory } />
            <ol>
                { 
                    categories.map(category => { return <li key={ category }>{category}</li> }) 
                }
            </ol>
        </>
    )
}