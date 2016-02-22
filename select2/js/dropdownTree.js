/*
 * author: Lin Wei
 * email: wataru19831111@hotmail.com
 * Date: 2014-05-22
 * version 0.1 (single select only)
 * depend on jQuery,Bootstrap(optional),select2 & zTree
 * 
 * 
 * This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/


var DropdownTree = function (setting) {
    this.config = setting;
};
DropdownTree.prototype = $.extend(new Select2.class.single(), {
    createContainer: function () {
        var container = $(document.createElement("div")).attr({
            "class": "select2-container"
        }).html([
            "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
            "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
            "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
            "</a>",
            "<label for='' class='select2-offscreen'></label>",
            "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
            "<div class='select2-drop select2-display-none'>",
            "   <div class='select2-search'>",
            "       <label for='' class='select2-offscreen'></label>",
            "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
            "       aria-autocomplete='list' />",
            "   </div>",
            "   <ul class='select2-results' role='listbox'>",
            "   </ul>",
            "	<ul class='ztree' style='width:auto;height:auto;max-height:400px;border:0;overflow-y:auto;margin-top:0'></ul>",
            "</div>"].join(""));
        return container;
    },
    initContainer: function () {
        var self = this;
        Select2.class.single.prototype.initContainer.call(this);
        this.treeContainer = self.results.next();
        /*this.treeBtn=this.container.find("b");
    	this.treeBtn.on("click",function(event){
    		self.showTree(self)
    	});*/
        this.selection.bind("focus", function () {
            //self.treeContainer.hide();
            self.search.parent().show();
            //self.showTree(self)
            //self.results.show();
        });
    },
    updateResults: function () {
        Select2.class.single.prototype.updateResults.call(this);
        var search = this.search;
        if (search.val().length >= this.opts.minimumInputLength) {
            this.treeContainer.hide();
        }
        else {
            this.treeContainer.show();
        }
    },
    opening: function () {
        if (this.config.ajax) {
            Select2.class.single.prototype.opening.call(this);
        }
        else {
            Select2.class.single.prototype.opening.call(this);
            this.search.parent().hide();
            this.results.hide();
        }
        this.showTree();
    },
    showTree: function () {
        var self = this;
        this.treeContainer.show();
        if (!this.config.isOpenedTree) {
            var filter = function(treeId, parentNode, childNodes) {
                if (!childNodes) return null;
                for (var i = 0, l = childNodes.length; i < l; i++) {
                    childNodes[i].name = childNodes[i].name.replace(/\.n/g, '.');
                }
                return childNodes;
            };

            var beforeAsync = function(treeId, treeNode) {
                if (treeNode && !treeNode.id) {
                    treeNode.id = treeNode.name;
                }
            };

            var beforeClick = function(treeId, treeNode) {
                //var check = (treeNode && !treeNode.isParent);
                var check = (treeNode && !treeNode.disSelected);
                if (!check) alert("Can not select this node...");
                return check;
            };

            var onClick = function(e, treeId, treeNode) {
                self.data({ id: treeNode.id, text: treeNode.name, icon: treeNode.icon });

                self.onSelect({ id: treeNode.id, text: treeNode.name, icon: treeNode.icon });

                self.treeContainer.hide();
                self.close();
                self.focus();
            };

            var onAsyncSuccess = function(event, treeId, treeNode, msg) {

            };

            var onNodeCreated = function(event, treeId, treeNode) {
                if (treeNode.hidden) {
                    $("#" + treeNode.tId).css({ display: "none" });
                }
            };
            var setting = {
                view: {
                    dblClickExpand: true,
                    showIcon: false
                },
                async: {
                    enable: true,
                    url: this.config.tree.url,
                    cache: false,
                    //autoParam:["id", "name=n", "level=lv"],
                    autoParam: ["id", "organizeId", "countNodeId","menuId"],
                    type: 'post',
                    //otherParam:{"otherParam":"zTreeAsyncTest"},
                    dataFilter: filter
                },
                data: {
                    keep: {
                        leaf: true,
                        parent: true
                    },
                    simpleData: {
                        enable: true,
                        idKey: "id",
                        pIdKey: "pid",
                        rootPId: -1
                    }
                },
                callback: {
                    beforeAsync: beforeAsync,
                    beforeClick: beforeClick,
                    onClick: onClick,
                    onAsyncSuccess: onAsyncSuccess,
                    onNodeCreated: onNodeCreated
                }
            };

            setting = $.extend(setting, this.config.tree);
            $.fn.zTree.init(this.treeContainer, setting);
            this.config.isOpenedTree = true;
        }
    }
});

$.fn.dropdownTree = function () {
    var args = Array.prototype.slice.call(arguments, 0), opts, multiple;
    function format(data) {
        if (!data.icon) return data.text;
        return "<img  src='" + data.icon + "'/> " + data.text;
    }
    this.each(function () {
        if (args.length === 0 || typeof (args[0]) === "object") {
            var defaults = {
                formatResult: format,
                formatSelection: format,
                minimumInputLength: 2,
                allowClear: false,
                placeholderOption: "first"
            };
            opts = args.length === 0 ? defaults : $.extend(defaults, args[0]);
            opts.element = $(this);
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                multiple = opts.element.prop("multiple");
            } else {
                multiple = opts.multiple || false;
                if ("tags" in opts) { opts.multiple = multiple = true; }
            }

            /*select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
            select2.init(opts);*/
            //console.log(opts);
            var dropdownTree = new DropdownTree(args[0]);
            dropdownTree.init(opts);
        }
    });
    return this;
};