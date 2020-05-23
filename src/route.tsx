import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";
import React, {Component, ComponentClass, ComponentType} from "react";



export interface RouteDecoratorProps extends RouteComponentProps {
    path: string
}

export default function route(path : string) {
    console.log(path);

    // return function Highlighted<T extends {new(...args: any[]): {}} & RouteDecoratorProps>(InputTemplate: ComponentClass<RouteDecoratorProps>) {
    return function Wrapper(InputTemplate: ComponentClass<RouteDecoratorProps>) {
        console.log(path);

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
