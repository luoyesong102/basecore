USE [LoginDB]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 2020/1/6 12:20:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] NULL,
	[UserName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Remark] [nvarchar](50) NULL,
	[CreateDate] [datetime] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[Admin] ([Id], [UserName], [Password], [Remark], [CreateDate]) VALUES (1, N'admin', N'admin', N'管理员', CAST(N'2019-12-31T10:32:13.927' AS DateTime))
INSERT [dbo].[Admin] ([Id], [UserName], [Password], [Remark], [CreateDate]) VALUES (2, N'sam', N'sam', N'管理员', CAST(N'2019-12-31T10:32:13.927' AS DateTime))
INSERT [dbo].[Admin] ([Id], [UserName], [Password], [Remark], [CreateDate]) VALUES (3, N'jiang', N'jiang', N'管理员', CAST(N'2019-12-31T10:32:13.927' AS DateTime))
