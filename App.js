import Button from './components/Button/Button';
import { useTheme } from './context/MyContexTaskTwo';
import { useLanguage } from './context/MyContextTaskThree';
import { useName } from './context/MyContextTaskOne';
import { Fragment } from 'react';
import "./App.css"


export default function App() {		
	//theme_changer
	let {isDarkTheme, toggleTheme} = useTheme();


	//language_changer
	let languages = {
		ua:{title:"заголовок"},
		en:{title:"heading"},
		de:{title:"Заголовок по немекци"}
	  };
	let {
		isUa, 
		toggleModal,
		language, //en/ua/de
		selectLanguage
	} = useLanguage();

	
	//user_context task
	let {uName} = useName()
	let langList = [
		'ua','en','de'	
	];
	return(
		<Fragment>
			{/* task 1 */}
			<div>
				<h1>U NAME:{uName}</h1>
			</div>
		{/* task 2 */}
        <div className={isDarkTheme?"dark_theme":"light_theme"}>
			<Button onTouch={toggleTheme}>
			{isDarkTheme?"Светлая тема":"Темная тема"}
			</Button>
		</div>

		{/* task 3 */}
		<p>{isUa?`${languages.en.title}`:`${languages.ua.title}`}</p>
		<Button onTouch={toggleModal}>
			{isUa?
			"укр"
			:"en"}
		</Button>
		<br />
		<ul>
			{
				langList.map(lang=>
				<li 
					key={lang}
					onClick={()=>selectLanguage(lang)}
				>
					{lang}
				</li>)
			}
		</ul>
		<h1>
			Текущий язык : {language}
			<br />
			Заголовок : {languages[language].title}
		</h1>
		</Fragment>
	)
}

// export default App;