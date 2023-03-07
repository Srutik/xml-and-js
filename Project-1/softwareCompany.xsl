<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h2>Employee Information</h2>
				<table border="1">
					<tr bgcolor="red">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Department</th>
					</tr>
					<xsl:for-each select="company/data/employees">
						<tr>
							<td>
								<xsl:value-of select="id"/>
							</td>
							<td>
								<xsl:value-of select="firstName"/>
							</td>
							<td>
								<xsl:value-of select="lastName"/>
							</td>
							<td>
								<xsl:value-of select="department"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>