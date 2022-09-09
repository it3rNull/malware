import plotly.graph_objects as go
import plotly.offline as pyo

def draw_plot():
    categories = ['Korean','Math','English','Music','Science']
    categories = [*categories, categories[0]]

    grade1 = [94, 79, 65, 74, 91]
    grade2 = [80, 55, 74, 85, 100]
    grade3 = [83, 84, 95, 63, 75]
    grade1 = [*grade1, grade1[0]]
    grade2 = [*grade2, grade2[0]]
    grade3 = [*grade3, grade3[0]]

    fig = go.Figure(
        data=[
            go.Scatterpolar(r=grade1, theta=categories, fill='toself', name='Student1'),
            go.Scatterpolar(r=grade2, theta=categories, fill='toself', name='Student2'),
            go.Scatterpolar(r=grade3, theta=categories, fill='toself', name='Student3')
        ],
        layout=go.Layout(
            title=go.layout.Title(text='Grade'),
            polar={'radialaxis': {'visible': True}},
            showlegend=True
        )
    )

    print(str(fig.to_json()))
    return str(fig.to_json())

draw_plot()
