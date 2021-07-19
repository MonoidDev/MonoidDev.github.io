export function clickOutside(node: Node) {
  
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as any) && !event.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('clickoutside', node as any)
      );
      console.log('dispatched')
    }
  }

	document.addEventListener('click', handleClick, true);
  
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}
