import React from "react";
import PropTypes from 'prop-types';

export const Card = (props)=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card ocultar">
                            <div className="row">
                                <div className="col-10">
                                    <p className="bentham-regular">{props.content}</p>
                                </div>
                                
                                <div className="col-2 delete d-flex justifi-content-center align-items-center">
                                    <a href="#" className="bentham-regular fs-4" onClick={props.eliminar}>X</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    )
};

Card.PropTypes ={
    content: PropTypes.string,
    eliminar: PropTypes.func,
};