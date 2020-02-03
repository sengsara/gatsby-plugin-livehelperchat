exports.onInitialClientRender = (_, { enableImprovedAccessibility = true }) => {
  if (enableImprovedAccessibility) {
    const container = document.documentElement || document.body
    const config = { attributes: true, childList: true, subtree: true }

    let domObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          /* eslint-disable no-useless-computed-key */
          const { [0]: addedNodes } = mutation.addedNodes

          const lhcContainerExists =
            addedNodes &&
            addedNodes.childNodes[0] &&
            addedNodes.childNodes[0].id === 'lhc_status_container'

          if (lhcContainerExists) {
            const lhcBoxElement = document.getElementById(
              'lhc_status_container',
            )
            let lhcBox = lhcBoxElement
            lhcBox.setAttribute('aria-label', 'livehelperchat box')

            domObserver.disconnect()
          }
        }
      })
    })

    domObserver.observe(container, config)
  }
}
