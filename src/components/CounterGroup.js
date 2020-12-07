import Counter from "./Counter";

export default function ({ numCounter = 0 }) {
    return (
        <div>
            {[...Array(numCounter > 0 ? numCounter : 0)].map(((_, index) => (< Counter key={index} />)))}
        </div>
    )
}