import React from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
import './SearchBar.css'
import GGButton from '../Logos/GGButton'


type Props = {
    isLarge : boolean
} 

class SearchBar extends React.Component<Props>{
    
    //font size
    render() {
        if (this.props.isLarge){
            return(
                <div className="search-container">
                {/* <Form.Control 
                    size="lg"
                    type="text"
                    className="search-container element left big"
                    placeholder="아이디를 입력해주세요.">
                </Form.Control> */}
                <div className="search-container element right big">
                    <GGButton height={64} width={50}/>
                </div>
            </div>
            )
        } else {
            return(
                <div className="search-container">
                    {/* <Form.Control 
                        size="lg"
                        type="text"
                        className="search-container element left small"
                        placeholder="아이디를 입력해주세요.">
                    </Form.Control> */}
                    <div className="search-container element right small">
                        <GGButton height={36} width={24}/>
                    </div>
                </div>
            )
        }
    }

}
export default SearchBar;