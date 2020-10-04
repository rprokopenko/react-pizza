import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
import { setCategory } from '../redux/actions/filters';


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);



    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(index => { dispatch(setCategory(index)) })} items={['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']} />
                <SortPopup items={[{ name: 'popular', type: 'popular' }, { name: 'price', type: 'price' }, { name: 'alphabet', type: 'alphabet' }]} />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
}

export default Home;
