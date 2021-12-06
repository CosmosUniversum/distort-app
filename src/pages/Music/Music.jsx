import styles from './Music.css'
import AddMusic from '../../components/AddSuggestion/AddSuggestion'
import AddSuggestion from '../../components/AddSuggestion/AddSuggestion'

const Music = ({ user, suggestions }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Music page
                </h1>
            </main>
            <body>
            {suggestions?.Similar?.Results.map(suggestion =>
            <>
                <div>
                    <p>{suggestion.Name}</p>
                    <AddSuggestion suggestion={suggestion}/>
                </div>
            </>  
            )}
            </body>
        </>
    )
}

export default Music


//map the result to a div
//each div, map info inside the result (name, descriptions)[suggestionData.name]
