// seperated out the full app.R code for ease of formatting/code readability

function RAppCode() {
  return(
    <pre><code>
# Load packages<br></br>
library(shiny)<br></br>
library(shinythemes)<br></br>
library(dplyr)<br></br>
library(readr)<br></br>

# Load data<br></br>
trend_data &#x3C;- read_csv(&#x22;data/trend_data.csv&#x22;)<br></br>
trend_description &#x3C;- read_csv(&#x22;data/trend_description.csv&#x22;)<br></br>

# Define UI<br></br>
ui &#x3C;- fluidPage(theme = shinytheme(&#x22;lumen&#x22;),<br></br>
&emsp;&emsp;&emsp;titlePanel(&#x22;Google Trend Index&#x22;),<br></br>
&emsp;&emsp;&emsp;sidebarLayout(<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sidebarPanel(<br></br>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Select type of trend to plot<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;selectInput(inputId = &#x22;type&#x22;, label = strong(&#x22;Trend index&#x22;),<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;choices = unique(trend_data$type),<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;selected = &#x22;Travel&#x22;),<br></br>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Select date range to be plotted<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dateRangeInput(&#x22;date&#x22;, strong(&#x22;Date range&#x22;), start = &#x22;2007-01-01&#x22;, end = &#x22;2017-07-31&#x22;,<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;min = &#x22;2007-01-01&#x22;, max = &#x22;2017-07-31&#x22;),<br></br>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Select whether to overlay smooth trend line<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;checkboxInput(inputId = &#x22;smoother&#x22;, label = strong(&#x22;Overlay smooth trend line&#x22;), value = FALSE),<br></br>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Display only if the smoother is checked<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;conditionalPanel(condition = &#x22;input.smoother == true&#x22;,<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sliderInput(inputId = &#x22;f&#x22;, label = &#x22;Smoother span:&#x22;,<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;min = 0.01, max = 1, value = 0.67, step = 0.01,<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;animate = animationOptions(interval = 100)),<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;HTML(&#x22;Higher values give more smoothness.&#x22;)<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;)<br></br>
&emsp;&emsp;&emsp;),<br></br>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Output: Description, lineplot, and reference<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mainPanel(<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;plotOutput(outputId = &#x22;lineplot&#x22;, height = &#x22;300px&#x22;),<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;textOutput(outputId = &#x22;desc&#x22;),<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tags$a(href = &#x22;https://www.google.com/finance/domestic_trends&#x22;, &#x22;Source: Google Domestic Trends&#x22;, target = &#x22;_blank&#x22;)<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;)<br></br>
&emsp;&emsp;&emsp;)<br></br>
)<br></br>

# Define server function<br></br>
server &#x3C;- function(input, output) &#123;<br></br>

  # Subset data<br></br>
  selected_trends &#x3C;- reactive(&#123;<br></br>
    req(input$date)<br></br>
    validate(need(!is.na(input$date[1]) &#x26; !is.na(input$date[2]), &#x22;Error: Please provide both a start and an end date.&#x22;))<br></br>
    validate(need(input$date[1] &#x3C; input$date[2], &#x22;Error: Start date should be earlier than end date.&#x22;))<br></br>
    trend_data %&#x3E;%<br></br>
      filter(<br></br>
        type == input$type,<br></br>
        date &#x3E; as.POSIXct(input$date[1]) &#x26; date &#x3C; as.POSIXct(input$date[2]<br></br>
        ))<br></br>
&#125;)<br></br>


&emsp;&emsp;&emsp;# Create scatterplot object the plotOutput function is expecting<br></br>
&emsp;&emsp;&emsp;output$lineplot &#x3C;- renderPlot(&#123;<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;color = &#x22;#434343&#x22;<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;par(mar = c(4, 4, 1, 1))<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;plot(x = selected_trends()$date, y = selected_trends()$close, type = &#x22;l&#x22;,<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;xlab = &#x22;Date&#x22;, ylab = &#x22;Trend index&#x22;, col = color, fg = color, col.lab = color, col.axis = color)<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Display only if smoother is checked<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if(input$smoother)&#123;<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;smooth_curve &#x3C;- lowess(x = as.numeric(selected_trends()$date), y = selected_trends()$close, f = input$f)<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lines(smooth_curve, col = &#x22;#E6553A&#x22;, lwd = 3)<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;<br></br>
&emsp;&emsp;&emsp;&#125;)<br></br>

&emsp;&emsp;&emsp;# Pull in description of trend<br></br>
&emsp;&emsp;&emsp;output$desc &#x3C;- renderText(&#123;<br></br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;trend_text &#x3C;- filter(trend_description, type == input$type) %&#x3E;% pull(text)
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;paste(trend_text, &#x22;The index is set to 1.0 on January 1, 2004 and is calculated only for US search traffic.&#x22;)
&emsp;&emsp;&emsp;&#125;)
&#125;

# Create Shiny object<br></br>
shinyApp(ui = ui, server = server)<br></br>
</code></pre>
  )
}

export default RAppCode
