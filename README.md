# AnnoCons
The web-based platform to visualize and annotate constituency tree.

## Operation

The system automatically converts the bracketed text to the text span. All the tree editing operations rely on the constituency span modification.
There are several control buttons on the right of the interface, which are used to modify the text span.

### ADD
After clicking the `New Tag` button, the annotator is able to add a new constituent span by typing tuple. If the added span is contradicted with the existing span, the system will cancel the ADD operation to ensure the legality of the final constituency tree.

### DELETE
The user is able to delete a span by clicking the `X` button on the right of the tuple. 

### WITHDRAW
`Undo` button and `Undo all` button are used to reverse the last action and reset all operation, respectively.