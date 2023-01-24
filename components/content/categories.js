import { Fragment } from "react";
import Text from "../utility/text";

const Categories = ({categories})=>{
    
    return(
        <Fragment>
            <div className='categories'>
            {
                categories.map(({imageUrl, category, income, color})=>{
                    return(
                        <div key={category} className='category'>
                            <div className="category-title">
                                <div style={{background: color}} className="category-image">
                                    <img src={imageUrl} alt={category} />
                                </div>
                                <Text variant='category-name'>{category}</Text>
                            </div>
                            <Text variant='category-income'>{income}</Text>
                        </div>
                    )
                })
            }
            </div>
            <style jsx> {`
            .categories{
                width: 100%;
                height: 100%;
            }
            .category{
                height: 60px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .category-title{
                display: flex;
                width: 50%;
                align-items: center;
                justify-content: flex-start;
            }
            .category-image{
                height: 40px;
                width: 40px;
                border-radius: 100px;
                display: flex;
                align-items: center;
                justify-content: center;                
            }
            `} </style>
        </Fragment>
    )
}

export default Categories