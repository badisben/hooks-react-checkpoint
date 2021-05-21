
import MCard from '../moviecard/card'
import './liste.css'


const MovieList = (props)=>{
    const {moviesprops} = props
    return(
        
       <div className={'h-container'}>
       {moviesprops.map(dd => <MCard movieprops={dd}/>)}
     
       </div>
    )
}
export default MovieList 