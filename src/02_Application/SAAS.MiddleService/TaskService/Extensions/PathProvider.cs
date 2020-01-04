﻿
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace TaskService.Extensions
{
    public interface IPathProvider
    {
        string MapPath(string path);
        string MapPath(string path, bool rootPath);
        IHostingEnvironment GetHostingEnvironment();
    }

    public class PathProvider : IPathProvider
    {
        private IHostingEnvironment _hostingEnvironment;

        public PathProvider(IHostingEnvironment environment)
        {
            _hostingEnvironment = environment;
        }
        public IHostingEnvironment GetHostingEnvironment()
        {
            return _hostingEnvironment;
        }

        public string MapPath(string path)
        {
            return MapPath(path, false);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="path"></param>
        /// <param name="rootPath">获取wwwroot路径</param>
        /// <returns></returns>
        public string MapPath(string path, bool rootPath)
        {
            if (rootPath)
            {
                return Path.Combine(_hostingEnvironment.WebRootPath, path);
            }
            return Path.Combine(_hostingEnvironment.ContentRootPath, path);
        }
    }
}