import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import React, {Component, ComponentClass, ComponentType} from "react";


export interface RouteDecoratorProps extends RouteComponentProps {
    path: string
}


/**
 * 
 * @param path 
 */
export default function route(path : string) {

    return function Wrapper(InputTemplate: ComponentClass<RouteDecoratorProps>) {

        class Template extends Component<RouteDecoratorProps> {
            
            static defaultProps = {
                path: path
            }

            constructor(props: RouteDecoratorProps) {
                super(props);
            }
            
            getPath(){
                return path;
            }

            render(){
                return(
                    <> 
                        <InputTemplate {...this.props}/>
                    </>
                )
            }
        }

        return withRouter(Template)
    }
}


    // function component<T extends React.Component<{}&RouteComponentProps>>(component : T) {

    //     class WrapperController extends component {

    //         componentDidMount(){
    //         }
    
    //         render(){
    //             return(<></>)
    //         }
    //     }
    //     return withRouter(WrapperController)
    
    // }
