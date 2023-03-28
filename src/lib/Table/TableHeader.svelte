<!-- 
	@component TableHeader
	
	Header row for a `Table`. Intended to be put in the `header` slot of a `Table`

	Slots:
	- default: TableHeader content, intended for `TableCell` components with `isHeader=true`
	
	Css Variables:
	- tableHeaderBg (default: #c0c0c0): background color for the header
	- tableHeaderBorderBottom (default: #a31c54): bottom border color for the header
 -->
<tr>
	<slot></slot>
</tr>
<style lang="scss">
	tr {
		background-color: var(--tableHeaderBg, #c0c0c0);
		border-bottom: var(--tableHeaderBorderBottom, #a31c54) solid 0.1rem;

	}
</style>