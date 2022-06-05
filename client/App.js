import React from "react";
import MainRouter from './Mainrouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import {hot} from 'react-hot-loader'

const App = () =>{
    return(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}
React.useEffect(()=>{
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles){
        jssStyles.parentNode.removeChild(jssStyles)
    }
}, [])
export default hot(module)(App)