import { useEffect, useState } from "react";

function Categories () {
    const [categories, setCategories] = useState();

    useEffect(() => {
        const categories = [
            {
                id: '100201',
                name: 'Food'
            },
            {
                id: '100202',
                name: 'Hot bread'
            },
            {
                id: '100203',
                name: 'Drinks & Beverage'
            },
            {
                id: '100204',
                name: 'Powder'
            },
            {
                id: '100205',
                name: 'Chicken'
            },
            {
                id: '100206',
                name: 'Pork and beans'
            },
        ];
        setCategories(categories);
    }, []);
    return (
        <div style={styles.row}>
            {
                categories?.map((category) => (
                    <span style={styles.categoryName}>{category.name}</span> 
                ))
            }
        </div>
    );
}

const styles = {
    row: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
        marginBottom: '20px'
    },
    categoryName: {
        float: 'none',
        display: 'inline-block',
        backgroundColor: '#ffffff',
        padding: '10px',
        marginRight: '10px'
    }
}
export default Categories;