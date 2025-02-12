import './Heading.css';

type PropsType = {
    text: string;
};

export const Heading = ({text}: PropsType) => {
    return <h1 className="heading">{text}</h1>;
}