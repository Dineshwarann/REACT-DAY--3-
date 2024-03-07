import React,{useState} from 'react'
import Banner from './Banner';
export default function Card(props){


    //USING STATES FOR EACH AND EVERY CARD 
    
    const [show0,setShow0]=useState(true);
    const [show1,setShow1]=useState(true);
    const [show2,setShow2]=useState(true);
    const [show3,setShow3]=useState(true);
    const [show4,setShow4]=useState(true);
    const [show5,setShow5]=useState(true);
    const [show6,setShow6]=useState(true);
    const [show7,setShow7]=useState(true);
    
   //FUNCTIONS TO ADD AND SUB FOR EACH AND EVERY CARD FOR INCREASING AND DECREASING IN CART
    function add0(){
        props.setState((props.state)+1);
        setShow0(!show0);
    }
    function sub0(){
        props.setState((props.state)-1);
        setShow0(!show0);
    }

    function add1(){
        props.setState((props.state)+1);
        setShow1(!show1);
    }
    function sub1(){
        props.setState((props.state)-1);
        setShow1(!show1);
    }

    function add2(){
        props.setState((props.state)+1);
        setShow2(!show2);
    }
    function sub2(){
        props.setState((props.state)-1);
        setShow2(!show2);
    }

    function add3(){
        props.setState((props.state)+1);
        setShow3(!show3);
    }
    function sub3(){
        props.setState((props.state)-1);
        setShow3(!show3);
    }

    function add4(){
        props.setState((props.state)+1);
        setShow4(!show4);
    }
    function sub4(){
        props.setState((props.state)-1);
        setShow4(!show4);
    }

    function add5(){
        props.setState((props.state)+1);
        setShow5(!show5);
    }
    function sub5(){
        props.setState((props.state)-1);
        setShow5(!show5);
    }

    function add6(){
        props.setState((props.state)+1);
        setShow6(!show6);
    }
    function sub6(){
        props.setState((props.state)-1);
        setShow6(!show6);
    }

    function add7(){
        props.setState((props.state)+1);
        setShow7(!show7);
    }
    function sub7(){
        props.setState((props.state)-1);
        setShow7(!show7);
    }

   



    return(
         //CARD CONTENT FOR EACH AND EVERY CARD
         //SETTING ONCLICK FUNCTION FOR EVERY CARD
        <div className="cardSection">
           <Banner/>
           <div className="cardContainer">
            <div className="card">
            <img src="https://m.media-amazon.com/images/I/51YOeZehIKL._AC_UY218_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">BOAT 170 TWS</h5>
            <p className="card-text">999 Rs</p>
            {
                show0===true?<a href="#" className="btn btn-outline-dark" onClick={add0}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub0}>Remove from Cart</a>
            }
            
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/51m4NsZau4L._AC_UY218_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">SONY HT-S40R</h5>
            <p className="card-text">24,990 Rs</p>
            {
                show1===true?<a href="#" className="btn btn-outline-dark" onClick={add1}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub1}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/519zMN+tUsL._SX679_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">ONEPLUS 11R 5G</h5>
            <p className="card-text">37,999 Rs</p>
            {
                show2===true?<a href="#" className="btn btn-outline-dark" onClick={add2}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub2}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/41Mc8I5Z-5L._AC_UY218_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">DELL P2422H FHD</h5>
            <p className="card-text">11,731 Rs</p>
            {
                show3===true?<a href="#" className="btn btn-outline-dark" onClick={add3}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub3}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/61sRKTAfrhL._SX679_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">APPLE AIRPODES </h5>
            <p className="card-text">22,000 Rs</p>
            {
                show4===true?<a href="#" className="btn btn-outline-dark" onClick={add4}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub4}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/51AbB+I1pvL._SY450_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">NOISE VS104 TWS</h5>
            <p className="card-text">1,799 Rs</p>
            {
                show5===true?<a href="#" className="btn btn-outline-dark" onClick={add5}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub5}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/71LfnkRgZ4L._SX569_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">APPLE WATCH SE</h5>
            <p className="card-text">28,900 Rs</p>
            {
                show6===true?<a href="#" className="btn btn-outline-dark" onClick={add6}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub6}>Remove from Cart</a>
            }
            </div>
            </div>

            <div className="card">
            <img src="https://m.media-amazon.com/images/I/41r48BjZ1JL._SY450_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">JBL WAVE 200</h5>
            <p className="card-text">2,999 Rs</p>
            {
                show7===true?<a href="#" className="btn btn-outline-dark" onClick={add7}>Add to Cart</a>:<a href="#" className="btn btn-outline-dark" onClick={sub7}>Remove from Cart</a>
            }
            </div>
            </div>
            </div>
        </div>
    )
}