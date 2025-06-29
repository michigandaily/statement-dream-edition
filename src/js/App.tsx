import { MoonHub, Article } from "../components/MoonHub"
import "../css/main.scss"

const App = () => {
    const articles: Article[] = [
        { id: '1', title: 'Hello World', url: 'https://example.com' },
        { id: '2', title: 'Hello World', url: 'https://example.com' },
        { id: '3', title: 'Hello World', url: 'https://example.com' },
        { id: '4', title: 'Hello World', url: 'https://example.com' },
        { id: '5', title: 'Hello World', url: 'https://example.com' },
    ];

    return <>
        <h1 className="dream-title">Dream&nbsp;Edition</h1>
        <MoonHub articles={articles} />
    </>;
};

export default App;
