import React, {Component, ComponentClass} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, RouteComponentProps } from "react-router-dom";
import { RouteDecoratorProps } from './route';
import Landing from './Pages/LandingPage/Landing';

// export interface RouterProps {
//     history: boolean
// }

/**
 * 라우터에서 해줘야할것.
 * 1 로딩기능 추가 ( 자동으로 로딩만들어주기. 데이터 다 받아올때까지)
 * 2 관련해서 전달할 프롭들 기본? ( 자동)
 * 3. @testable? 
 * 3. 테스팅?? 
 * 4. 클래스의경우 private public..
 * 5. 에러페이지처리. 404 페이지로 넘어가게 없는페이지 접속할시에.
 * 6. route 만약에 
 * @param Template 
 */

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
