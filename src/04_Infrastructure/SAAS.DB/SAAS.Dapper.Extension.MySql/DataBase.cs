﻿using System;
using System.Data;
using SAAS.Dapper.Extension.Core.SetC;
using SAAS.Dapper.Extension.Core.SetQ;
using SAAS.Dapper.Extension.Model;

namespace SAAS.Dapper.Extension.MySql
{
    public static class DataBase
    {
        public static QuerySet<T> QuerySet<T>(this IDbConnection sqlConnection)
        {
            return new QuerySet<T>(sqlConnection, new MySqlProvider());
        }
        
        public static QuerySet<T> QuerySet<T>(this IDbConnection sqlConnection, IDbTransaction dbTransaction)
        {
            return new QuerySet<T>(sqlConnection, new MySqlProvider(), dbTransaction);
        }
        
        public static CommandSet<T> CommandSet<T>(this IDbConnection sqlConnection, IDbTransaction dbTransaction)
        {
            return new CommandSet<T>(sqlConnection, new MySqlProvider(), dbTransaction);
        }

        public static CommandSet<T> CommandSet<T>(this IDbConnection sqlConnection)
        {
            return new CommandSet<T>(sqlConnection, new MySqlProvider());
        }

        public static void Transaction(this IDbConnection sqlConnection, Action<TransContext> action,
            Action<System.Exception> exAction = null)
        {
            if (sqlConnection.State == ConnectionState.Closed)
                sqlConnection.Open();

            var transaction = sqlConnection.BeginTransaction();
            try
            {
                action(new TransContext(sqlConnection, transaction, new MySqlProvider()));
                transaction.Commit();
            }
            catch (System.Exception ex)
            {
                if (exAction != null)
                    exAction(ex);
                else
                {
                    transaction.Rollback();
                }
            }
            finally
            {
                sqlConnection.Close();
            }
        }
    }
}
