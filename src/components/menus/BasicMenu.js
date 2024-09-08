import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BasicMenu = () => {

    // const loginState = useSelector(state => state.loginSlice);


    // console.log(loginState);

    return (
        <nav id='navbar' className='flex bg-blue-300'>
            <div className='w-4/5'>
                <ul>
                    <li>
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link to={'/todo/list'}>List</Link>
                    </li>

                    
                    {/* {
                        loginState.email ? 
                        <>
                        <li>
                            <Link to={'/list'}>About</Link>
                        </li>
                        </>
                        :
                        <>
                        </>
                    } */}

                    
                </ul>
            </div>

            <div>
                <div>                    
                    <Link to={'/member/login'}>Login</Link>
                </div>
            </div>

        </nav>
    )
}

export default BasicMenu;