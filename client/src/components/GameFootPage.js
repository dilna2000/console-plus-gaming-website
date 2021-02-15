import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './GameFootPage.css';
import {datas} from '../shared/datas';
import $ from 'jquery';


const GameFootPage=()=>{

   

    const games1 = datas.slice(0,4).map((data)=>{
        return(
          <Link to={data.path}><div class="ui  link   cards" style={{display:'inline-block',borderRadius:'10px',marginRight:'50px',marginTop:'40px',marginBottom:'40px'}}>
          <div class="  card">
            <div class="image">
              <img src={data.src}/>
            </div>
            <div class="content">
        <div class="header">{data.title}</div>
             
              <div class="description">
              {data.description}
              </div>
            </div>
           
          </div>
          </div></Link>
        );
    })
    const games2 = datas.slice(4,7).map((data)=>{
      return(
        <Link to={data.path}><div className="ui  link cards" style={{display:'inline-block',borderRadius:'10px',marginRight:'50px',marginTop:'40px',marginBottom:'40px'}}>
  <div class="card">
    <div class="image">
      <img src={data.src}/>
    </div>
    <div class="content">
      <div class="header">{data.title}</div>
     
      <div class="description">
        {data.description}
      </div>
    </div>
    
  </div>
  </div></Link>
          
      );
  })
    return(
        <div style={{width:'100%'}}>
            <div className="bg-ref">
                    <div className="container" >
                        <div className="row text-center">
                            <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 boxstyle-about">
                                <h1 style={{ textAlign: 'left' }}>Games</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="container" style={{marginTop:'40px',marginBottom:'40px'}}>
            <div className="text-center">
                <h2 style={{padding:'10px'}} className="gamepage-description">Nostalgia 100</h2>
                {games1}
            </div>
            <div className="text-center">
              <h2 style={{padding:'10px'}} className="gamepage-description">Modern Classics</h2>
                {games2}
            </div>

           </div>
          
        </div>
    )
}
export default GameFootPage;