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


# Citation
```
@inproceedings{yang-etal-2022-challenges,
    title = "Challenges to Open-Domain Constituency Parsing",
    author = "Yang, Sen  and
      Cui, Leyang  and
      Ning, Ruoxi  and
      Wu, Di  and
      Zhang, Yue",
    booktitle = "Findings of the Association for Computational Linguistics: ACL 2022",
    month = may,
    year = "2022",
    address = "Dublin, Ireland",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.findings-acl.11",
    doi = "10.18653/v1/2022.findings-acl.11",
    pages = "112--127",
    abstract = "Neural constituency parsers have reached practical performance on news-domain benchmarks. However, their generalization ability to other domains remains weak. Existing findings on cross-domain constituency parsing are only made on a limited number of domains. Tracking this, we manually annotate a high-quality constituency treebank containing five domains. We analyze challenges to open-domain constituency parsing using a set of linguistic features on various strong constituency parsers. Primarily, we find that 1) BERT significantly increases parsers{'} cross-domain performance by reducing their sensitivity on the domain-variant features.2) Compared with single metrics such as unigram distribution and OOV rate, challenges to open-domain constituency parsing arise from complex features, including cross-domain lexical and constituent structure variations.",
}

@inproceedings{cui-etal-2022-investigating,
    title = "Investigating Non-local Features for Neural Constituency Parsing",
    author = "Cui, Leyang  and
      Yang, Sen  and
      Zhang, Yue",
    booktitle = "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    month = may,
    year = "2022",
    address = "Dublin, Ireland",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.acl-long.146",
    doi = "10.18653/v1/2022.acl-long.146",
    pages = "2065--2075",
    abstract = "Thanks to the strong representation power of neural encoders, neural chart-based parsers have achieved highly competitive performance by using local features. Recently, it has been shown that non-local features in CRF structures lead to improvements. In this paper, we investigate injecting non-local features into the training process of a local span-based parser, by predicting constituent $n$-gram non-local patterns and ensuring consistency between non-local patterns and local constituents. Results show that our simple method gives better results than the self-attentive parser on both PTB and CTB. Besides, our method achieves state-of-the-art BERT-based performance on PTB (95.92 F1) and strong performance on CTB (92.31 F1). Our parser also outperforms the self-attentive parser in multi-lingual and zero-shot cross-domain settings.",
}

```