import React from 'react';

const ViewAllTransactions = ({all}) => {
    const {name,type,amount,id}= all;
    return (
        <div>
           <div style={{backgroundColor:'#ECECEC'}} className="d-flex mx-auto w-100 text-dark mt-3 ">
           <p className='m-2 me-auto'> {id}</p>
            <p className='m-2 me-auto'> {name}</p>
            <p className='m-2 me-auto' >{amount}</p>
            <button className='btn text-dark'><i class="fa-solid fa-trash-can"></i></button>
            <button className='btn text-dark'><i class="fa-sharp fa-solid fa-pencil"></i></button>

           </div>
        </div>
    );
};

export default ViewAllTransactions;