  onPopState (e) {
    this.abortComponentLoad()

    const route = (e.state || {}).route || toRoute(window.location.pathname)

    Promise.resolve()
    .then(async () => {
      const data = await this.fetchComponent(route)
      let props
      if (route !== this.route) {
        props = await this.getInitialProps(data.Component, data.ctx)
      }

      this.route = route
      this.set(getURL(), { ...data, props })
    })
    .catch((err) => {
      if (err.cancelled) return

      // the only way we can appropriately handle
      // this failure is deferring to the browser
      // since the URL has already changed
      window.location.reload()
    })
  }
