import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';


class App extends Component{
    
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  leaveFeedback = (option) => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));  
    };
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
        
  }
  
  countPositiveFeedbackPercentage() {
    const { good} = this.state;
    return Math.round(good * 100 / this.countTotalFeedback()) || 0;
  }
  
    render() {
      const { good, neutral, bad } = this.state;
      const optionKeys=Object.keys(this.state)

        return(
          <>
            <Section>
              <FeedbackOptions options={optionKeys} onLeaveFeedback={this.leaveFeedback} />
            </Section>
            
            <Section title="Statistics">
              {this.countTotalFeedback() !== 0 ?
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                countPositivePercentage={this.countPositiveFeedbackPercentage()}
                /> :
                <Notification message="There is no feedback" />
            }
            </Section>  
            </>
        );
    }
}

export default App;
