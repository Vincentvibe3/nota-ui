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
			background-color: var(--tableHeaderBgHover, #909090);
		}

		&:nth-child(2n) {
			background-color: var(--tableBgAlternate, #fafafa);		

			&:hover{
				background-color: var(--tableHeaderBgHover, #909090);
			}
		}
	}

</style>