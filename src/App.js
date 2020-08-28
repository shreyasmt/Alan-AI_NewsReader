import React, {useEffect, useState} from 'react';
import './App.css';
import NewsCards from './NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles';
import wordsToNumbers from'words-to-numbers';
const apikey = 'ebc59ff0899a394837d4670ede254dc82e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
    const [newsarticles, setnewsArticles] = useState([]);
    const [activearticles, setactivearticles] =useState(-1);
    const classes = useStyles();
  useEffect(()=>{
    alanBtn({
      key: apikey,
      onCommand:({command, articles, number})=>{
          if(command === 'newHeadlines'){
              setnewsArticles(articles);
              setactivearticles(-1);
          }else if(command === 'highlight'){
              setactivearticles((preactivearticle)=> preactivearticle + 1);
          }else if(command === 'open'){
            console.log(number);
              const parsenumber = number.length >2 ? wordsToNumbers(number, {fuzzy: true}) : number;
              const article = articles[parsenumber - 1];
              if(parsenumber >20){
                alanBtn().playText('PLease try again');
              }else if(article){
                window.open(article.url, '_blank');
                alanBtn().playText('Opening....');
              }
             
          }         
      }
    })
  },[])


  return (
    <div className="App">
      <div className={classes.logocontainer}>
      <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.logo} alt="logo" />
      </div>
      <NewsCards articles = {newsarticles} activearticle={activearticles}/>
    </div>
  );
}

export default App;
