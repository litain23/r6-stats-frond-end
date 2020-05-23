import React, {Component, ComponentClass} from 'react';
import fs from 'fs';
import _ from 'lodash';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, RouteComponentProps } from "react-router-dom";
import { RouteDecoratorProps } from './route';
import Landing from './Pages/LandingPage/Landing';

// export interface RouterProps {
//     history: boolean
// }


// function router<T extends {new(...args: any[]): {}}>(InputTemplate: ComponentClass<T>) {
// function router<T extends {test:number}&{ new(...args: any[]): {} }>(ComponentFunction: T) {  
function router(Template: ComponentClass) {

    const req = require.context( './Pages/', true, /\.(js|tsx)$/i);   
    const pending : Promise<any>[] = [];
    for(const key of req.keys()) {
        const check = key.match(/.*?(?=.tsx)/);
        if(check) {
            const path = check[0].replace("./", "./Pages/")
            pending.push(import(`${path}`));
        }
    }

    return class extends Component<{},{name:any}> {

        constructor(props:{}) {
            super(props);
            this.state = { name : [] }
        }

        componentDidMount(){

            // this.setState({name:[<Route exact path={'/landing'} component={Landing}></Route>,<Route exact path={'/login'} component={Landing}></Route>]})

           Promise.all(pending).then( (modules) => {

            const a = modules.map( (module) => {
                    const descriptors = Object.getOwnPropertyDescriptors(module.default)
                    console.log(descriptors);
                    if(descriptors.WrappedComponent && descriptors.WrappedComponent.value) {
                        if(descriptors.WrappedComponent.value.defaultProps){
                            if (Object.keys(descriptors.WrappedComponent.value.defaultProps).includes("path")) {
                                const path = descriptors.WrappedComponent.value.defaultProps["path"]
                                return <Route exact path={path} component={module.default}/>
                            }
                        }
                    }
            })


            const b = a.filter(value => value !== undefined)
            this.setState({name: b});
            })


            // Promise.all(pending).then( (modules) => {
            //     modules.map( (module) => {

            //         const descriptors = Object.getOwnPropertyDescriptors(module.default)

            //         if(descriptors.WrappedComponent && descriptors.WrappedComponent.value) {
            //             if(descriptors.WrappedComponent.value.defaultProps){
            //                 if (Object.keys(descriptors.WrappedComponent.value.defaultProps).includes("path")) {
            //                     const path = descriptors.WrappedComponent.value.defaultProps["path"]
            //                     return <Route exact path={'/landing'} component={Landing}></Route>
            //                 }
            //             }
            //         }

            //     })
            // })

            


        }

    
        render(){


            return (
                <Router>
                    <Template></Template>
                    <Switch>
                        {this.state.name}
                    </Switch>
                </Router>
            )
        }
    }
}



// // function router<T extends { new(...args: any[]): {} }>(ComponentFunction: T) {  

//     const req = require.context( './Pages/', true, /\.(js|tsx)$/i);   
//     const comported : Promise<any>[] = [];
//     for(const key of req.keys()) {
//         const check = key.match(/.*?(?=.tsx)/);
//         if(check) {
//             const abc = check[0].replace("./", "./Pages/")
//             comported.push(import(`${abc}`));
//         }
//     }

//     const ABC = ComponentFunction as unknown as typeof React.Component

//     return class extends React.Component<{}, {modules: any[]}> {

//             constructor(props:{}) {
//                 super(props)
//                 this.state = { modules : [] }
//             }
            
//             componentDidMount(){
//             //   this.newProps = transformationFunc(this.props);
//                 // 여기서 동적으로 import해줍니다.
//                 // 그전까지는 stop! loading!
                

//                 Promise.all(comported).then( (modules) => {
//                     this.setState({modules: modules})
//                     // <Route exact path="/search" component={module as unknown as typeof React.Component}></Route>
//                 })


//             }
            
//             render(){

//                 // return <div></div>
//                 return(
//                     <>
//                 <Router>
//                 <ABC/>
//                 <Switch>
//                 {
//                     this.state.modules.map( (module) => {
//                         if (module.default.name === "Landing") {
//                             return <Route key={"1"} exact path="/search" component={module.default}></Route>
//                         }
//                     })
//                 }
//                 </Switch>
//                 </Router>
//                 {/* <Switch>
//                 <Route exact path="/search" component={Search} />
//                 <Route exact path="/landing" component={Landing} />
//                 <Route exact path="/login" component={Login} />
//                 <Route exact path="/signup" component={SignUp} />
//                 <Route exact path="/vali" component={validation} />
        
//                 <Route component={Landing} />
//                 </Switch> */}
//                 </>)
//             }
//         }

    
//         // return class extends ComponentFunction<{},{},any> {

//         //     constructor(...args:any[]){
//         //         console.log(args);

//         //         super(_.extend(args, {abc:123}))
//         //     }
            
//         // }
//         //     return <ABC {...args} {history:boolean}></ABC>

//         //     // constructor(...args:any[]){
               
//         //     //     super(_.extend(...args, nah));
//         //     // }
            
//         //     // async componentDidMount(){
//         //     //     Promise.all(comported).then( (value) => {
//         //     //         console.log(value)
//         //     //     })
//         //     // }

//         //     // render(){
//         //     //     return<> hey </>
//         //     // }
//         // }
// }


// // function router<T extends {new(...args:any[]):{}}>(constructor:T) {
// //     return class extends constructor {
// //     }
// // }


// // function router(link: string) {
// //     return class extends React.Component {
// //         newProperty = "new property";
// //         hello = "override";
// //         render(){
// //             return(<></>)
// //         }
// //     }
// // }


// // function router(link : string) {
// //     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
// //     }
// // }
export default router;
