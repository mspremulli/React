import React, {Component} from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
        
        const ninjaList = ninjas.map(ninja =>{
            return(
                <div key ={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
                </div>
            )
        
        })
        return(
            <div>
                {ninjaList}
            </div>
        )
    
}

export default Ninjas;


// render(){
//     // const {ninjas} = this.props;
//     return(
//         <div>
//             <div>Name: {this.props.ninjas.name}</div>
//             <div>Age: {this.props.ninjas.age}</div>
//             <div>Belt: {this.props.ninjas.belt}</div>
//         </div>
//     )