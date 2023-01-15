// researched making a tab component for this project:
// https://www.npmjs.com/package/react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RAppCode from './RAppCode';

// researched showing code snippets in HTML/JSX:
// https://code-boxx.com/display-code-snippets-html

// researched adding spaces into text (to format the code snippets)
// https://www.geeksforgeeks.org/how-to-insert-spaces-tabs-in-text-using-html-css/

// encoded with https://mothereff.in/html-entities
function ExampleTabs() {
    return(
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>app.R</Tab>
            </TabList>

            <TabPanel>
                <h6>
                    Shiny comes with a variety of built in input widgets. With minimal syntax it is
                    possible to include widgets like the ones shown on the left in your apps:
                    <br></br>
                </h6>
                <pre><code>
                    # Select type of trend to plot<br></br>
                    selectInput(inputId = &#x22;type&#x22;, label = strong(&#x22;Trend index&#x22;),<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;choices = unique(trend_data$type),<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;selected = &#x22;Travel&#x22;)<br></br>

                    # Select date range to be plotted<br></br>
                    dateRangeInput(&#x22;date&#x22;, strong(&#x22;Date range&#x22;),<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;start = &#x22;2007-01-01&#x22;, end = &#x22;2017-07-31&#x22;,<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;min = &#x22;2007-01-01&#x22;, max = &#x22;2017-07-31&#x22;)<br></br>
                </code></pre>
                <h6>
                    Displaying outputs is equally hassle-free:
                    <br></br>                    
                </h6>
                <pre><code>
                    mainPanel(<br></br>
                    &emsp;&emsp;&emsp;plotOutput(outputId = &#x22;lineplot&#x22;, height = &#x22;300px&#x22;),<br></br>
                    &emsp;&emsp;&emsp;textOutput(outputId = &#x22;desc&#x22;),<br></br>
                    &emsp;&emsp;&emsp;tags$a(href = &#x22;https://www.google.com/finance/domestic_trends&#x22;,<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#x22;Source: Google Domestic Trends&#x22;, target = &#x22;_blank&#x22;)<br></br>
                            )
                </code></pre>
                <h6>
                    Build your plots or tables as you normally would in R, and make them reactive 
                    with a call to the appropriate render function:
                    <br></br>
                </h6>
                <pre><code>
                    output$lineplot &#x3C;- renderPlot(&#123;<br></br>
                    &emsp;&emsp;&emsp;plot(x = selected_trends$date, y = selected_trends$close, type = &#x22;l&#x22;,<br></br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;xlab = &#x22;Date&#x22;, ylab = &#x22;Trend index&#x22;)<br></br>
                    &#125;)
                </code></pre>
                <h6>
                    Want to find out how we built the Google Trend Index app shown on the left? See 
                    the next tab for the complete source code.
                </h6>
            </TabPanel>
            <TabPanel>
                <RAppCode />
            </TabPanel>
        </Tabs>
    )
    
}

function Example() {
    // link on actual website was broken (https://www.google.com/finance/domestic_trends)
    // replaced with relevant modern link below instead
    const trendLink = <a href="https://trends.google.co.uk/trends/explore?date=all&geo=US&q=%2Fm%2F011s0"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Source: Google Domestic Trends
                            </a>

    return(
        <div className="r-container example-container">
            <div className="example-titles">
                <h1>Here is a Shiny app</h1>
                <h3>
                    Shiny apps are easy to write. No web development skills are required.
                </h3>
            </div>
            <div className="examples">
                <div className="example-output">
                    <h2>Google Trend Index</h2>
                    <form className="trend-controls">
                        <label className="control-divider">Trend index
                            <select>
                                <option value="advertising & marketing">Advertising & marketing</option>
                                <option value="education">Education</option>
                                <option value="small business">Small business</option>
                                <option value="travel">Travel</option>
                                <option value="unemployment">Unemployment</option>
                            </select>
                        </label>
                        <label className="control-divider">Date range
                            <div className="date-box">
                                <input 
                                    className="date-field date-field-1"
                                    type="text"
                                    placeholder="2007-01-01"
                                />
                                <p>to</p>
                                <input 
                                    className="date-field date-field-2"
                                    type="text"
                                    placeholder="2017-07-31"
                                />
                            </div>                            
                        </label>
                        <label>
                            <input 
                                className="checkbox"
                                type="checkbox"
                                value="1"
                            />Overlay smooth trend line
                        </label>
                    </form>
                    <img className="example-image" src="./img/advertising-marketing.png"></img>
                    <p>
                        The Google Advertising & Marketing Index tracks queries related to 
                        marketing, advertising, ads, adsense, constant contact, public relations,
                        etc. The index is set to 1.0 on January 1, 2004 and is calculated only for 
                        US search traffic.
                    </p>
                    {trendLink}
                    <a href=""></a>
                </div>
                <div className="example-code">
                    <ExampleTabs />
                </div>
            </div>
        </div>
    )
}

export default Example