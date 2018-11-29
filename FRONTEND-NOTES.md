Name: Robinson Coulton 
Email: robinsoncoulton@hotmail.co.uk
Time to complete: ~5hrs

Notes:

Hi Guys,

I've tried to use little redux rather than just connecting every component as often times I find its better to design the react components properly. I appreciate that testing redux ability is why you have included it in the test but I would prefer not to use it for this task at all if I were to build it alone.

As you can see I've toyed with adding disabling sidebar assets when they are currently selected. Without adding everything to redux so that the sidebar assets(left) are aware of the state of the preview selections (right) its not super simple to re-enable the sidebar assets without refs which I would avoid using at all costs. The solution I would go for would be to make both the sidebar and preview selections the same Asset component, or use a higher order component to wrap the asset for preview with the remove button, but hard to do without going into changing the styles around a fair bit.

If you have any questions I'd love to hear your thoughts.

Best and thanks for your time,

Rob


