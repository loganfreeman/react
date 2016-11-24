const MyComponent = React.createClass({
  contentHeight: 0,
  scrollViewHeight: 0,

  render() {
    return (
      <ScrollView
        ref='scrollView'
        onContentSizeChange={(w, h) => this.contentHeight = h}
        onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}>
          ...
      </ScrollView>
    );
  },

  scrollToBottom(animated = true) {
    const scrollHeight = this.contentHeight - this.scrollViewHeight;
    if (scrollHeight > 0) {
      const scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollTo({x: 0, scrollHeight, animated});
    }
  }
});
