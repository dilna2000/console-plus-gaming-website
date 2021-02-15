import React from 'react';
import {Link} from 'react-router-dom';
import './Reference.css';
import {links} from '../shared/links';

const Reference=()=>{
    const linkref=links.map((link)=>{
        return(
            <div className="row text-center" style={{marginBottom:'50px'}}>
                <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                <h2 className="ref-for">{link.for}</h2>
                <div style={{textAlign:'left',marginTop:'20px'}}>
                    <a class="ref-link" href={link.link} target="_blank">Repository</a>
                </div>
                </div>
            </div>

        );
    })
    return(
        <div style={{width:'100%'}}>
            <div className="bg-ref">
                    <div className="container" >
                        <div className="row text-center">
                            <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 boxstyle-about">
                                <h1 style={{ textAlign: 'left' }}>References</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container" style={{padding:'50px'}}>
                <div className="text-center">
                    <h4 className="ref-title">Links to repositories that helped us to create this website</h4>
                </div>
            </div>
            
            <div className=" black-ref">
                    <div className="container">
                        <div className="text-center" style={{margin:'20px',marginBottom:'50px',marginTop:'50px'}}>
                            {linkref}
                    </div>
                    </div>
            </div>
           
           
        </div>
    )
}
export default Reference;