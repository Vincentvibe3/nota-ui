<!-- 
	@component TableRow
	
	Row for a `Table`

	Slots:
	- default: TableRow content, intended for `TableCell` components
	
	Css Variables:
	- tableBg (default: #f0f0f0): background color for the header
	- tableBorder (default: #c0c0c0): bottom border color for the header
	- tableBgHover (default: #c0c0c0): Background color on hover
	- tableBgAlternate (default: #fafafa): Row color when alternating
 -->
<tr>
	<slot></slot>
</tr>
<style lang="scss">
	tr {
		background-color: var(--tableBg, #f0f0f0);
		border-top: none;
		border-top: var(--tableBorder, #c0c0c0) solid 0.1rem;
		border-bottom: none;		
		transition: all ease-in-out 0.2s;

		&:hover{
			background-color: var(--tableBgHover, #c0c0c0);
		}

		&:nth-child(2n) {
			background-color: var(--tableBgAlternate, #fafafa);		

			&:hover{
				background-color: var(--tableBgHover, #c0c0c0);
			}
		}
	}

</style>