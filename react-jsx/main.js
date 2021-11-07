const {render} = ReactDOM;
// useState fonksiyonu React terminolojisinde hook olarak adlandırılıyor
// bu fonksiyon sayesinde functional componentlerde de state tutabilme imkanımız doğuyor
const {useState} = React;


// React componentleri içerisine gelen propertylere ilk arguman olarak bir obje içerisinden erişebiliyoruz 
// props objesi içerisinde 'children' adında özel bir key ile componentin cocuk elementlerine erişebiliriz
const Btn = (props) => {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

const Card = (props) => {
    

    return (
        <div className='card'>
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-text'>{props.text}</p>

            <Btn onClick={props.onBuy}>Buy</Btn>
        </div>
    )
}

class Counter extends React.Component {
    // state propertysi class componentlerde özel bir property ve bu state ismi ile
    // React'ın Component classı tarafından kullanıldığını söyleyebiliriz
    // state objesi componentin datasını tutan bir değişken olduğunu söyleyebiliriz
    state = {
        count: 0
    }

    constructor(props) {
        super(props)
    }

    // this keywordunun içerisinde bulunduğu componenti göstermesi için 
    // component methodlarını arrow function olarak yazmakta fayda var
    decrement = () => {
        // sıfırın altına inmemesi için eğer sıfır is count değerimiz 
        // early return yaparak methodu bitirebiliriz
        if (this.state.count === 0) return;

        this.setState({count: this.state.count - 1})
    }

    reset = () => {
        this.setState({count: 0})
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>

                <Btn onClick={this.decrement}>Decrement -</Btn>
                <Btn onClick={this.reset}>Reset</Btn>
                <Btn onClick={this.increment}>Increment +</Btn>
            </div>
        )
    }
}

const FunctionalCounter = () => {
    // useState fonksiyonu içerisine başlangıç değerini yazarak yeni bir state oluşturabiliyoruz
    // useState fonksiyonu bir array içerisinde state değerimizi ve state değiştirmek için kullanacağımız fonksiyonu veriyor
    const [count, setCount] = useState(0)
    
    const decrement = () => {
        if (count === 0) return;
        
        setCount(count - 1)
    }

    const reset = () => setCount(0)
    
    const increment = () => setCount(count + 1)

    return (
        <div>
            <h3>Functional Count: {count}</h3>

            <Btn onClick={decrement}>Decrement -</Btn>
            <Btn onClick={reset}>Reset</Btn>
            <Btn onClick={increment}>Increment +</Btn>
        </div>
    )
}


const App = () => {
    const login = () => console.log('LOGİN!')
    const logout = () => console.log('LOGOUT!')

    const buy = () => console.log('BUY!!')
    const buy2 = () => console.log('ANother buy method!!')

    return (
        <div className='container'>
            <h1>Hello JSX!</h1>

            {/*
            Bir react componentine property yollamak için html attribute'u gibi bir yazım kullanabiliriz
            React componentlerinde de html elementlerinde olduğu gibi child elementler yazabiliriz
            */}
            <Btn onClick={login}>
                Login
            </Btn>

            <Btn onClick={logout}>
                Logout
            </Btn>

            <Card 
                title='Card Title 1' 
                text='Card text description...' 
                onBuy={buy} />

            <Card 
                title='Card Title 2'
                text='Another card description...'
                onBuy={buy2} />

            <Counter />
            <Counter />

            <FunctionalCounter />
        </div>
    )
}

const root = document.querySelector('#app');
render(<App/>, root);
