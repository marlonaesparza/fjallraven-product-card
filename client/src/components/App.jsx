import React from 'react';
import RootSlider from './RootSlider.jsx';
import CardContents from './CardContents.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productPrice: '',
      productColors: [],
      productImages: [],
      productType: '',
      productRating: 0,
      currentColor: '',
      currentSwatch: 0,
      sliderPosition: 0,
      sliderPositionMax: 0
    }

    this.handleCarousel = this.handleCarousel.bind(this);
    this.handleThumbs = this.handleThumbs.bind(this);
    this.handleSwatches = this.handleSwatches.bind(this);
  }

  handleThumbs(e) {
    let position = e.target.id;
    console.log(position);

    this.setState({sliderPosition: 620 * position});
  }

  handleCarousel(e) {
    let direction = e.target.id;

    if (direction === 'previous') {
      if (this.state.sliderPosition > 0) {
        this.setState((state) => ({
          sliderPosition: state.sliderPosition - 620
        }));
      }
    } else if (direction === 'next') {
      if (this.state.sliderPosition < this.state.sliderPositionMax) {
        this.setState((state) => ({
          sliderPosition: state.sliderPosition + 620
        }));
      }
    }
  }

  handleSwatches(e) {
    this.setState((state) => ({
      currentSwatch: Number(e.target.id)
    }), () => {
      this.setState({currentColor: e.target.style.backgroundColor});
    });
  }

  componentDidMount() {
    let productId = location.href.split('//').join('').split('/')[1];

    this.props.getProduct(productId)
      .then((product) => {
        this.setState(() => {
          return {productTitle: product.title};
        }, () => {
          this.setState(() => {
            return {productPrice: product.price};
          }, () => {
            this.setState(() => {
              if (JSON.parse(product.colors).length === 0) {
                return {productColors: ['black']};
              } else {
                return {productColors: JSON.parse(product.colors)};
              }
            }, () => {
              this.setState(() => {
                return {productImages: JSON.parse(product.urls)};
              }, () => {
                this.setState(() => {
                  let max = (JSON.parse(product.urls).length / 2 - 1) * 620;
                  return {sliderPositionMax: max};
                }, () => {
                  this.setState(() => {
                    if (JSON.parse(product.colors).length === 0) {
                      return {currentColor: 'black'};
                    } else {
                      return {currentColor: JSON.parse(product.colors)[0]};
                    }
                  });
                });
              });
            });
          });
        });
      })
      .catch((error) => {
        console.log('Failed To Get Product Details:', error);
      })
      .then(() => {
        return this.props.getProductType(productId)
          .then((type) => {
            if (!type) {
              throw type;
            } else {
              this.setState({productType: type});
            }
          });
      })
      .catch((error) => {
        console.log('Failed To Get Product Type:', error);
      })
      .then(() => {
        return this.props.getProductReview(productId)
          .then((result) => {
            if (!result) {
              throw result;
            } else {
              let rating = Math.floor(Number(result));
              this.setState({productRating: rating});
            }
          });
      })
      .catch((error) => {
        console.log('Failed To Get Product Review:', error);
      });
  }

  render() {
    return (
      <div className='product-card-container'>
        <RootSlider images={this.state.productImages} title={this.state.productTitle} sliderPosition={this.state.sliderPosition} sliderPositionMax={this.state.sliderPositionMax} handleCarousel={this.handleCarousel} handleThumbs={this.handleThumbs}/>
        <CardContents title={this.state.productTitle} price={this.state.productPrice} type={this.state.productType} colors={this.state.productColors} currentColor={this.state.currentColor} currentSwatch={this.state.currentSwatch} rating={this.state.productRating} handleSwatches={this.handleSwatches}/>
      </div>
    );
  }
}

export default App;
