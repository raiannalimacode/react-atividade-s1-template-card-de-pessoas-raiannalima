export const Card = ({name, age, country}) => {
    return (
        <li>
            <h2>
                Dev: {name}
            </h2>
            <p>
                Idade: {age}
            </p>
            <p>
                País: {country}
            </p>
        </li>
    )
}