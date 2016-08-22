/**
 * Created by Fire360Boy on 20-Jul-16.
 */

var box = function (boxTitle, color) {
    switch (color) {
        case 'red':
            color = 'panel-danger';
            break;
        case 'blue':
            color = 'panel-primary';
            break;
        case 'orange':
            color = 'panel-warning';
            break;
        case 'gray':
            color = 'panel-default';
            break;
        case 'green':
            color = 'panel-success';
            break;
        case 'cyan':
            color = 'panel-info';
            break;
        case 'black':
            color = 'panel-inverse';
            break;
        default:
            color = '';
    }

    const temp = '<li class="ui-state-default" >\
                        <div class="col-xs-10 col-xs-offset-1" >\
                            <div class="panel ${color}" >\
                                <div class="panel-heading" >\
                                    <div style="padding-top: 8px;" class="glyphicon glyphicon-move pull-left" ></div >\
                                    &nbsp;\
                                    <h3 class="panel-title  pull-left editable searchable" data-type="text"\
                                        data-title="Please Enter a Title : " >\
                                        ${boxTitle}\
                                    </h3 >\
                                    <div class="btn-group pull-right " >\
                                        <button class="btn btn-sm btn-success fa fa-plus btnAddItem" ></button >\
                                        <button class="btn btn-sm btn-danger fa fa-trash btnRemoveCategory" ></button >\
                                    </div >\
                                    <div class="clearfix" ></div >\
                                </div >\
                                <div class="panel-body" >\
                                    <div >\
                                        <ul class="sortable-item connected-item" style="padding-left: 0px;min-height: 50px;" >\
                                        </ul >\
                                    </div >\
                                </div >\
                            </div >\
                        </div >\
                    </li >\
';
    Mustache.parse(temp, ['${', '}']);
    return Mustache.render(temp, {boxTitle: boxTitle, color: color});
};
var itemTem = function (itemTitle, href) {
    if (href == '' || href == null || href == undefined) href = '#';
    const temp = '<li style="padding-left: 35px; padding-bottom: 20px;" >\
                    <div class="pull-left editable searchable" data-type="text">${itemTitle}</div >\
                    <a  href="${href}" target="_blank" style="margin-top: 0px;" class="searchable btn btn-info btn-sm glyphicon glyphicon-link"></a> \
                            <div class="pull-right" >\
                                <button style="margin: 0;" class="btn btn-sm btn-danger glyphicon glyphicon-trash btnRemoveItem" ></button >\
                    </div >\
                 </li >';
    Mustache.parse(temp, ['${', '}']);
    return Mustache.render(temp, {itemTitle: itemTitle, href: href});
};
var hookEditable = function () {
    $('.editable').editable({success: save});
};
var hookItemBtns = function () {
    $('.btnRemoveItem').unbind('click');
    $('.btnRemoveItem').click(function () {
        var title = $(this).parent().prev().text().trim();
        var obj = $(this).closest('li');
        alertify.confirm('Are you sure to delete : "' + title + '"', function (e) {
            if (e) {
                obj.remove();
                save();
                alertify.success('"' + title + '" Removed.');
            } else {
                alertify.error('Aborted to Delete : "' + title + '".');
            }
        });

    });
};
var hookBoxBtns = function () {
    $('.btnRemoveCategory').unbind('click');
    $('.btnRemoveCategory').click(function () {
        var title = $(this).parent().prev().text().trim();
        var obj = $(this).closest('li');
        alertify.confirm('Are you sure to delete : "' + title + '"', function (e) {
            if (e) {
                obj.remove();
                save();
                alertify.success('"' + title + '" Removed.');
            } else {
                alertify.error('Aborted to Delete : "' + title + '".');
            }
        });

    });

    $('.btnAddItem').unbind('click');
    $('.btnAddItem').click(function () {
        var obj = $(this).parent().parent().nextUntil('ul').find('ul');
        alertify.prompt("Please inser item name", function (e, title) {
            if (e) {

                alertify.prompt('Please enter a link', function (e1, link) {
                    if (e1) {

                        alertify.success('"' + title + ' with ' + link + '" item added.');
                        obj.append(itemTem(title, link));
                        hookEditable();
                        hookItemBtns();
                        hookSortable();
                        save();
                    } else {
                        alertify.error("Cancel adding item");
                    }

                }, 'Http://');

            } else {
                alertify.error("Cancel adding item");
            }
        }, "");

    });
};
var hookSortable = function () {
    $('#right-sortable, #left-sortable').sortable({
        connectWith: ".connected",
        placeholder: "ui-sortable-placeholder",
        change: save
    });

    $('.sortable-item').sortable({
        connectWith: '.connected-item',
        change: save
    });

};
var clearSearch = function () {
    $('.searchable').removeClass('animated jello infinite');
};
var save = function () {
    clearSearch();
    function _save() {
        data = JSON.stringify(domJSON.toJSON($('#catGroup').get(0)));
        $.post('data/save', {
            data: data,
            _token: $('input[name=_token]').val()
        });
    }

    setTimeout(_save, 100);
};

$(function () {
    $("#searchInput").on('keyup', function (e1) {
        var that = this;
        setTimeout(function () {
            clearSearch();
            var searched = $(that).val().trim();
            if (!searched) {
                return;
            }

            $('.searchable').filter(function (index) {
                // console.log($(this).text() + " include " + searched + " ? " + $(this).text().includes(searched));
                var res = ($(this).text().includes(searched) || $(this).val().includes(searched) || ($(this).attr('href') && $(this).attr('href').includes(searched)) );
                // if (!res)
                //   $(this).addClass('notSelectSearch');
                return res;
            }).addClass('animated jello infinite');
        }, 0)
    });

    if ($('#data').text() != '' && $('#data').text() != '{}') {
        json = $.parseJSON($('#data').text());
        if (!$.isEmptyObject(json)) {
            var DOMDocumentFragment = domJSON.toDOM(json);
            $('#catGroup').wrapAll(DOMDocumentFragment);
            hookEditable();
            hookSortable();
            hookItemBtns();
            hookBoxBtns();
        }
    }


    $('#btnSeialize').click(function () {
        save();
    });

    $.fn.editable.defaults.mode = 'popup';

    hookEditable();
    hookBoxBtns();
    hookSortable();


    $('#btnModalAdd').click(function () {
        var catName = $('#categoryName').val();
        var catColor = $('#categoryColor').val();
        var leftRight = $('input[name=rightLeftRadio]:checked').val();
        if (leftRight == 'right') {
            $('#right-panel>ul').append(box(catName, catColor));
        } else {
            $('#left-panel>ul').append(box(catName, catColor));
        }

        $('#mdlCategory').modal('toggle');
        alertify.success('Created "' + catName + '" category with "' + catColor + '" color on "' + leftRight + '-Side".');
        hookEditable();
        hookBoxBtns();
        hookSortable();
        save();

    });

    $('#btnAddBox').click(function () {
        $('#categoryColor').closest('form')[0].reset();
        $('#categoryColor').colorselector();
    });

    $("#categoryColor").colorselector();

    $(".collapse").on('hidden.bs.collapse', function () {
        $(this).removeClass('glyphicon-collapse-up');
        $(this).addClass('glyphicon-collapse-down');
    });


});

